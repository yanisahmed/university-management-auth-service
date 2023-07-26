import { Model } from 'mongoose';

export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademiSemester = {
  title: 'Autum' | 'Fall' | 'Summer';
  year: string;
  code: '02' | '02' | '03';
  startMonth: Month;
  endMonth: Month;
};

export type AcademiSemesterModel = Model<IAcademiSemester, object>;
