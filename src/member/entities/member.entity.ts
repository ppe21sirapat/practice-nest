import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm' ;

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id:number ;

    @Column()
    firstname:string ;

    @Column()
    lastname:string ;
    
    @Column({nullable: true})
    email:string ;

    @Column({nullable: true})
    tel:string ;
} 