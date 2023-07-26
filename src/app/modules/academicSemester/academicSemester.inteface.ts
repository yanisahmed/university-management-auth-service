import { Model } from 'mongoose';

export type IAcademiSemester = {
  title: 'Autum' | 'Fall' | 'Summer';
  year: string;
  code: '02' | '02' | '03';
  startMonth:
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
  endMonth:
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
};

export type AcademiSemesterModel = Model<IAcademiSemester, object>;
