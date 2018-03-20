"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const entity_1 = require("../users/entity");
let Game = class Game extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Game.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('char', { length: 1, default: '' }),
    __metadata("design:type", Object)
], Game.prototype, "turn", void 0);
__decorate([
    typeorm_1.Column('char', { length: 1, nullable: true }),
    __metadata("design:type", Object)
], Game.prototype, "winner", void 0);
__decorate([
    typeorm_1.Column('text', { default: 'pending' }),
    __metadata("design:type", String)
], Game.prototype, "status", void 0);
__decorate([
    typeorm_1.OneToMany(_ => Player, player => player.game, { eager: true }),
    __metadata("design:type", Array)
], Game.prototype, "players", void 0);
__decorate([
    typeorm_1.OneToMany(_ => Cards, card => card.game, { eager: true }),
    __metadata("design:type", Array)
], Game.prototype, "cards", void 0);
Game = __decorate([
    typeorm_1.Entity()
], Game);
exports.Game = Game;
let Player = class Player extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Player.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(_ => entity_1.default, user => user.players),
    __metadata("design:type", entity_1.default)
], Player.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(_ => Game, game => game.players),
    __metadata("design:type", Game)
], Player.prototype, "game", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Player.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column('char', { length: 1 }),
    __metadata("design:type", Object)
], Player.prototype, "symbol", void 0);
__decorate([
    typeorm_1.OneToMany(_ => Cards, card => card.player),
    __metadata("design:type", Array)
], Player.prototype, "cards", void 0);
Player = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Index(['game', 'user', 'symbol'], { unique: true })
], Player);
exports.Player = Player;
let Cards = class Cards extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Cards.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], Cards.prototype, "color", void 0);
__decorate([
    typeorm_1.Column('int', { nullable: true }),
    __metadata("design:type", Number)
], Cards.prototype, "value", void 0);
__decorate([
    typeorm_1.Column('int', { length: 1, nullable: true }),
    __metadata("design:type", Number)
], Cards.prototype, "plus", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], Cards.prototype, "location", void 0);
__decorate([
    typeorm_1.ManyToOne(_ => Game, game => game.cards),
    __metadata("design:type", Game)
], Cards.prototype, "game", void 0);
__decorate([
    typeorm_1.ManyToOne(_ => Player, player => player.cards),
    __metadata("design:type", Player)
], Cards.prototype, "player", void 0);
Cards = __decorate([
    typeorm_1.Entity()
], Cards);
exports.Cards = Cards;
//# sourceMappingURL=entities.js.map