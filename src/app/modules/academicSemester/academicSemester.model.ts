import { Schema, model } from 'mongoose';
import {
  AcademiSemesterModel,
  IAcademiSemester,
} from './academicSemester.inteface';

const academicSemesterSchema = new Schema<IAcademiSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: ['Autum', 'Fall', 'Summer'],
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: ['01', '02', '03'],
    },
    startMonth: {
      type: String,
      required: true,
      enum: [
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
      ],
    },
    endMonth: {
      String,
      required: true,
      enum: [
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
      ],
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemester = model<IAcademiSemester, AcademiSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema,
);