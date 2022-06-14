import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Pagina {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    frase: string;

    @Column({
        nullable: true
    })
    imagemId: number;

    @Column({
        nullable: true
    })
    estiloPagina: number;

    constructor(
        id: number,
        frase: string,
        imagemId: number,
        estiloPagina: number,
    ) {
        this.id = id;
        this.frase = frase;
        this.imagemId = imagemId;
        this.estiloPagina = estiloPagina;
    }
}