import {
  IAcademiSemesterCode,
  IAcademiSemesterMonth,
  IAcademiSemesterTitle,
} from './academicSemester.inteface';

export const acdemicSemesterMonth: IAcademiSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const academicSemesterCode: IAcademiSemesterCode[] = ['01', '02', '03'];
export const academicSemesterTitle: IAcademiSemesterTitle[] = [
  'Autum',
  'Fall',
  'Summer',
];

export const academicSemesterTitleAndCodeMapper: {
  [key: string]: string;
} = {
  Autum: '01',
  Fall: '02',
  Summer: '03',
};
