import { DataTypes, Model } from 'sequelize';
import sequelize from "../postgres/pgConfig";


class organizationAdd extends Model {
  public id!: string;
  public street!: string;
  public city!: string;
  public state!: string;
  public zipCode!: string;
  public country!: string;
}

organizationAdd.init( {
  id: {
    type: DataTypes.STRING,
    
    primaryKey: true,
   
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
 {sequelize,
tableName:'organizationAdd'});

export default organizationAdd;