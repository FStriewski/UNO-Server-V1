import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne } from 'typeorm'
import User from '../users/entity'

// export type Symbol = 'x' | 'o'
// export type Row = [Symbol | null, Symbol | null, Symbol | null]
// export type Board = [Row, Row, Row]
// const emptyRow: Row = [null, null, null]
// const emptyBoard: Board = [emptyRow, emptyRow, emptyRow]

type Status = 'pending' | 'started' | 'finished'
type Location = 'Deck' | 'CurrentCard' | 'Player1Hand' | 'Player2Hand' | 'Player3Hand' | 'Player4Hand'
type Color = 'yellow' | 'red' | 'green' | 'blue' | 'black' 


@Entity()
export class Game extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    //Replacing with card content below
    // @Column('json', { default: emptyBoard })
    // board: Board

    // Change turn to sth else
    @Column('char', { length: 1, default: '' })
    turn: Symbol

    @Column('char', { length: 1, nullable: true })
    winner: Symbol

    @Column('text', { default: 'pending' })
    status: Status

    // eager: Eager relations only work when you use find* methods, load automatically
    @OneToMany(_ => Player, player => player.game, { eager: true })
    players: Player[]

// FS add:
    @OneToMany(_ => Cards, card => card.game, { eager: true })
    cards: Cards[]
}

@Entity()
// Docs: This decorator allows you to create a database index for a specific column or columns. It also allows you to mark column or columns to be unique.
@Index(['game', 'user', 'symbol'], { unique: true })
export class Player extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    // Many users can become players?!
    @ManyToOne(_ => User, user => user.players)
    user: User

    // Many players can join game
    @ManyToOne(_ => Game, game => game.players)
    game: Game

    @Column()
    userId: number

    // What is this??
    @Column('char', { length: 1 })
    symbol: Symbol

    // FS add:
    @OneToMany(_ => Cards, card => card.player)
    cards: Cards[]
}


@Entity()

export class Cards extends BaseEntity {
    
    // Should have n:1 to game and ?n:1 to player?
    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    color: Color

    @Column('int', { nullable: true }) 
    value: number

    @Column('int', { length: 1, nullable: true })
    plus: number

    @Column('text', { nullable: false })
    location: Location

// FS add:
    @ManyToOne(_ => Game, game => game.cards)
    game: Game

    @ManyToOne(_ => Player, player => player.cards)
    player: Player

}
