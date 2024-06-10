import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgres/pgConfig';

class InvoiceLineItem extends Model {
  public id!: string;
  public invoiceId!: string;
  public orderNo!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

InvoiceLineItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    invoiceId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    particular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'invoice_line_items',
  }
);

export default InvoiceLineItem;
