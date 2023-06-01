import { Component } from '@angular/core';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css'],
})
export class GameStartComponent {
  listQuestions: IQuestion[] = [
    {
      listAnswer: ['Duyên', 'Nga', 'Mai', 'Hoa'],
      incorrectAnswer: 'Duyên',
      question: 'Ai xinh đẹp nhất?',
    },
    {
      listAnswer: ['Lâm Đồng', 'TP.HCM', 'Nghệ An', 'Bình Thuận'],
      incorrectAnswer: 'Bình Thuận',
      question: 'Tỉnh nào sau đây giáp biển',
    },
    {
      listAnswer: ['Cá sấu', 'Nai', 'Hổ', 'Đại bàng'],
      incorrectAnswer: 'Cá sấu',
      question: 'Con vật nào sau đây khác những con còn lại?',
    },
    {
      listAnswer: ['Xoài', 'Mận', 'Dưa hấu', 'Cóc'],
      incorrectAnswer: 'Dưa hấu',
      question: 'Trái nào ngoài xanh trong đỏ?',
    },
    {
      listAnswer: ['10', '22', '6', '2023'],
      incorrectAnswer: '2023',
      question: 'Số nào lớn nhất?',
    },
    {
      listAnswer: ['5', '2', '0', '11'],
      incorrectAnswer: '5',
      question: 'Biết A + B = 8, B = 3. Hỏi A bằng mấy?',
    },
    {
      listAnswer: ['7', '6', '8', '9'],
      incorrectAnswer: '8',
      question:
        'Mẹ có 10 trái chuối, mẹ cho Hoa 2 trái chuối. Hỏi mẹ còn lại mấy trái chuối?',
    },
    {
      listAnswer: ['2', '4', '3', '1'],
      incorrectAnswer: '4',
      question: 'Quả địa cầu có mấy đại dương?',
    },
    {
      listAnswer: ['Đấm đá', 'Học hành', 'Ăn uống', 'Lanh chanh'],
      incorrectAnswer: 'Lanh chanh',
      question: 'Từ nào khác các từ còn lại?',
    },
    {
      listAnswer: ['Việt Nam', 'Trung Quốc', 'Mỹ', 'Nga'],
      incorrectAnswer: 'Việt Nam',
      question: 'Hoàng Sa, Trường Sa là của nước nào?',
    },
  ];

  countQuestion = 0;
  getItem() {
    return this.listQuestions[this.countQuestion];
  }

  checkAnswer(answer: string) {
    const isValid =
      this.getItem().incorrectAnswer.toLocaleLowerCase() ===
      answer.toLocaleLowerCase();
    ``;

    if (!isValid) return;
    this.countQuestion++;
  }

  clearItem() {
    this.countQuestion = 0;
  }
}

type IQuestion = {
  question: string;
  listAnswer: string[];
  incorrectAnswer: string;
};
