import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import SOW from './sowModel';
import SOWPaymentPlan from './sowPaymentPlan';


class SOWPaymentPlanLineItem extends Model {
  public id!: string;
  public sowPaymentPlanId!: string;
  public sowId!: string;
  public orderId!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}


SOWPaymentPlanLineItem.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    sowPaymentPlanId: {
      type: DataTypes.STRING,
      allowNull: false,
      references:{
        model:SOWPaymentPlan,
        key:'id',
      }

    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
      references:{
        model:SOW,
        key:'id',
      }
    },
    orderId: {
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
    tableName: 'sow_payment_plan_line_items',
  }
);

export default SOWPaymentPlanLineItem;
