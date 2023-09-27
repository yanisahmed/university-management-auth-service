import { Model } from 'mongoose';

export type IAcademiSemesterMonth =
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

export type IAcademiSemesterTitle = 'Autum' | 'Fall' | 'Summer';
export type IAcademiSemesterCode = '01' | '02' | '03';

export type IAcademicSemester = {
  title: IAcademiSemesterTitle;
  year: string;
  code: IAcademiSemesterCode;
  startMonth: IAcademiSemesterMonth;
  endMonth: IAcademiSemesterMonth;
};

export type AcademiSemesterModel = Model<
  IAcademicSemester,
  Record<string, unknown>
>;
