import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import Invoice from './invoiceModel';



class Payment extends Model {
  public id!: string;
  public paymentDate!: Date;
  public forExAmount!: number;
  public currency!: string;
  public indianAmount!: number;
  public invoiceId!: string;
  public isFullPayment!: boolean;
  public bankPaymentDetails!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Payment.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    forExAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    indianAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    invoiceId: {
      type: DataTypes.STRING,
      allowNull: false,
      references:{
        model:Invoice,
        key:'id'
      }
    },
    isFullPayment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bankPaymentDetails: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'payments',
  }
);

export default Payment;
