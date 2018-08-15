import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.reducer";

export const selectCoursesState = createFeatureSelector<CoursesState>(
  "courses"
);

export const selectCourseById = (courseId: number) =>
  createSelector(selectCoursesState, (coursesState: CoursesState) => {
    return coursesState.entities[courseId];
  });
