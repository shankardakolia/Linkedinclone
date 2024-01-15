import {apiSlice} from '../redux/apiSlice';

export const attendanceApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    endpoints: builder => ({
      postAttendance: builder.mutation({
        query: body => ({
          url: '/con1/HR/PostAttendence',
          method: 'post',
          body,
        }),
        invalidatesTags: ['Attendance'],
      }),
      attendanceReportMonthWise: builder.mutation({
        query: body => ({
          url: '/con1/HR/GetAttendenceReport',
          method: 'post',
          body,
        }),
        providesTags: ['Attendance'],
      }),
      employeeDetails: builder.mutation({
        query: body => ({
          url: '/con1/HR/GetAttendenceDetails',
          method: 'post',
          body,
        }),
        providesTags: ['Attendance'],
      }),
    }),
  }),
});

export const {
  usePostAttendanceMutation,
  useAttendanceReportMonthWiseMutation,
  useEmployeeDetailsMutation,
} = attendanceApi;
