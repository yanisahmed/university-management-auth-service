import ApiError from '../../../erros/ApiError';
import { academicSemesterTitleAndCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.inteface';
import { AcademicSemester } from './academicSemester.model';
import httpStatus from 'http-status';

const createSemester = async (
  payloads: IAcademicSemester,
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleAndCodeMapper[payloads.title] !== payloads.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code');
  }
  const createdSemester = await AcademicSemester.create(payloads);
  return createdSemester;
};

export const AcademicSemesterService = {
  createSemester,
};
