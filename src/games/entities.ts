import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne } from 'typeorm'
import User from '../users/entity'

// export type Symbol = 'x' | 'o'
// export type Row = [Symbol | null, Symbol | null, Symbol | null]
// export type Board = [Row, Row, Row]
// const emptyRow: Row = [null, null, null]
// const emptyBoard: Board = [emptyRow, emptyRow, emptyRow]

type Status = 'pending' | 'started' | 'finished'

@Entity()
export class Game extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    //Needs replacing with card content somehow
    // @Column('json', { default: emptyBoard })
    // board: Board

    @Column('char', { length: 1, default: 'x' })
    turn: Symbol

    @Column('char', { length: 1, nullable: true })
    winner: Symbol

    @Column('text', { default: 'pending' })
    status: Status

    // this is a relation, read more about them here:
    // http://typeorm.io/#/many-to-one-one-to-many-relations
    // eager: used for m:n relationship, load automatically
    @OneToMany(_ => Player, player => player.game, { eager: true })
    players: Player[]
}
// Might need updating on array and relationships: 
@Entity()
@Index(['game', 'user', 'symbol'], { unique: true })
export class Player extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @ManyToOne(_ => User, user => user.players)
    user: User

    @ManyToOne(_ => Game, game => game.players)
    game: Game

    @Column()
    userId: number

    // What is this??
    @Column('char', { length: 1 })
    symbol: Symbol
}


@Entity()

export class Cards extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    color: string

    @Column('int', { nullable: true }) 
    value: number

    @Column('int', { length: 1, nullable: true })
    plus: number

    @Column('text', { nullable: false })
    location: string

}
