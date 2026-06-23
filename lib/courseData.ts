import coursesData from "../courses.json";

export interface Level {
  name: string;
  duration?: string;
  programName?: string;
  modules?: string[];
  outcome?: string;
}

export interface Phase {
  name: string;
  duration: string;
  focus: string[];
}

export interface DailyStructure {
  morning: string;
  evening: string;
  night: string;
}

export interface Course {
  id: string;
  title: string;
  alias?: string[];
  category: string;
  overview: string;
  levels?: Level[];
  phases?: Phase[];
  modules?: string[];
  dailyStructure?: DailyStructure;
  features?: string[];
  positioning?: string;
  certification?: string;
  bonusModules?: string[];
  duration?: string;
  outcome?: string;
  trending?: boolean;
  featured?: boolean;
  image?: string;
  price?: number;
  discountPrice?: number;
  currency?: string;
}

export const courses = coursesData.courses as Course[];

export function getCourseById(id: string) {
  return courses.find((course) => course.id === id);
}

export function getRelatedCourses(course: Course, limit = 3) {
  return courses
    .filter((item) => item.id !== course.id && item.category === course.category)
    .slice(0, limit);
}
