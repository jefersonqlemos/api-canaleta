import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryColumn()
    id: number

    @Column("varchar")
    email: string

    @Column("varchar")
    password: string
}