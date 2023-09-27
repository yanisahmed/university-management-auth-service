import { Schema, model } from 'mongoose';
import {
  AcademiSemesterModel,
  IAcademicSemester,
} from './academicSemester.inteface';
import {
  academicSemesterCode,
  academicSemesterTitle,
  acdemicSemesterMonth,
} from './academicSemester.constant';
import ApiError from '../../../erros/ApiError';
import status from 'http-status';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitle,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: acdemicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: acdemicSemesterMonth,
    },
  },
  {
    timestamps: true,
  },
);

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(status.CONFLICT, 'Semester is Already Exist');
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester, AcademiSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema,
);
