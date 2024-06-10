import { Model, DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import Organization from './organizationModel';
import customerAdd from './customerAdd';

class Client extends Model {
  public id!: string;
  public organizationId!: string;
  public msaValidFrom!: Date;
  public msaValidUpto!: Date;
  public legalName!: string;
  public ndaSignedOn!: Date;
  public shortName!: string;
  public ndaValidFrom!: Date;
  public ndaValidUpto!: Date;
  public addressId!: string;
  public displayName!: string;
  public isNDASigned!: boolean;
  public isMSASigned!: boolean;
  public msaSignedOn!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Client.init(
  {
    id: {
      type:DataTypes.STRING,
      primaryKey: true,
      allowNull:false
    },
    organizationId: {
      type: DataTypes.STRING,
      allowNull: false,
      references:{
        model:Organization,
        key:'id',
      }
    },
    msaValidFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    msaValidUpto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    legalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ndaSignedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    
    shortName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ndaValidFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ndaValidUpto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isNDASigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isMSASigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    msaSignedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'clients',
  }
);

export default Client;
