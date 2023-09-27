import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterTitle,
  acdemicSemesterMonth,
} from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitle] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.string({
      required_error: 'Year is required',
    }),
    code: z.enum([...academicSemesterCode] as [string, ...string[]], {
      required_error: 'Code is required',
    }),
    startMonth: z.enum([...acdemicSemesterMonth] as [string, ...string[]], {
      required_error: 'Start Month is required',
    }),
    endMonth: z.enum([...acdemicSemesterMonth] as [string, ...string[]], {
      required_error: 'End Month is required',
    }),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
