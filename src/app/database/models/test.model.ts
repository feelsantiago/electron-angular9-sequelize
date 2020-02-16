import { Table, Column, Model } from 'sequelize-typescript';
@Table
export class Test extends Model<Test> {
    @Column
    public name: string;

    @Column
    public description: string;
}
