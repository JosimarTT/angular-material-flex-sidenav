export class PagedResult<T> {
  currentPage: number;
  pageCount: number;
  pageSize: number;
  rowCount: number;
  firstRowOnPage: number;
  lastRowOnPage: number;
  results: T[] = [];
}
