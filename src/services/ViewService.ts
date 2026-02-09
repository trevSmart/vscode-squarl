import { BookmarkViewType } from "../models";
import { BookmarkView } from "../views/BookmarkView";


export class ViewService {
  public static projectView: BookmarkView;
  public static teamView: BookmarkView;

  public static async init(): Promise<void> {
    ViewService.projectView = new BookmarkView(BookmarkViewType.project);
    ViewService.teamView = new BookmarkView(BookmarkViewType.team);
    await Promise.all([
      ViewService.projectView.bindbookmarks(),
      ViewService.teamView.bindbookmarks(),
    ]);
  }
}