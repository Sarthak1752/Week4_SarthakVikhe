import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import SOW from './sowModel';
import Client from './clientModel';

class SOWPaymentPlan extends Model {
  public id!: string;
  public sowId!: string;
  public clientId!: string;
  public plannedInvoiceDate!: string;
  public totalActualAmount!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SOWPaymentPlan.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
      references:{
        model:SOW,
        key:'id',
      }
    },
    clientId: {
      type: DataTypes.STRING,
      allowNull: false,
      references:{
        model:Client,
        key:'id',
      }
    },
    plannedInvoiceDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalActualAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'sow_payment_plans',
  }
);

export default SOWPaymentPlan;
