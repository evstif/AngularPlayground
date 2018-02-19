export class Comment {
  rating: number;
  comment: string;
  author: string;
  date: string;

  static empty(): Comment {
    let result = new Comment();
    result.author = '';
    result.comment = '';
    result.rating = 5;
    result.syncDate();

    return result;
  }

  public syncDate() { 
    this.date = new Date().toDateString();
  }
}

