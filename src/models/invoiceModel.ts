import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import SOW from './sowModel';
import Client from './clientModel';



class Invoice extends Model {
  public id!: string;
  public sowId!: string;
  public totalInvoiceValue!: number;
  public status!: string;
  public invoiceSentOn!: Date;
  public clientId!: string;
  public paymentReceivedOn!: Date;
  public invoiceVersionNumber!: number;
  public invoiceAmount!: number;
  public invoiceTaxAmount!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Invoice.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,

    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOW,
        key: 'id',
      },
    },
    totalInvoiceValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Drafted', 'Cancelled', 'Approved'),
      allowNull: false,
    },
    invoiceSentOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    clientId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Client,
        key: 'id',
      },
    },
    paymentReceivedOn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    invoiceVersionNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invoiceAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    invoiceTaxAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'invoices',
  }
);

export default Invoice;
