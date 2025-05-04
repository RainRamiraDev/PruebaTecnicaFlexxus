import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("articulos")
export class Articulo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  marca: string;

  @Column({ default: true })
  activo: boolean;

  @UpdateDateColumn({ name: "fecha_modificacion" }) 
  fechaModificacion: Date;
}
