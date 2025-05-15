import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchProducts = createAsyncThunk('products/fetchProducts');
const initialState = {
  courses: [
    {
      id: 0,
      title: 'Введение в технический английский',
      description: 'Понимание особенностей технической лексики и стиля',
      level: 'Начинающий',
      value: 'technicalEngStart',
      topics: [
        {
          id: 0,
          title: 'Формальный стиль в техническом английском',
          content: [
            'Узнайте ключевые различия между повседневным и техническим английским.',
            'Изучите устойчивые выражения и грамматические конструкции, используемые в документациях.',
          ],
          interactive: {
            flashcards: [
              { word: 'procedure', example: 'Follow the safety procedure.' },
              {
                word: 'specification',
                example: 'The product meets the required specifications.',
              },
            ],
            examples: [
              'This device is designed to operate at high temperatures.',
              'Ensure that the manual is followed precisely.',
            ],
            exercises: [
              {
                instruction:
                  'Перепишите в техническом стиле: "You should follow the steps carefully."',
                expectedAnswer: 'The steps should be followed carefully.',
              },
            ],
          },
        },
        {
          id: 1,
          title: 'Работа с технической документацией',
          content: [
            'Научитесь быстро находить важную информацию в тексте.',
            'Познакомьтесь с форматами и структурой технических документов (.md, .pdf, HTML).',
          ],
          interactive: {
            flashcards: [
              {
                word: 'overview',
                example: 'Read the overview before starting the setup.',
              },
              {
                word: 'requirement',
                example: 'Minimum system requirements are listed below.',
              },
            ],
            examples: [
              'Refer to the documentation for installation steps.',
              'This guide provides a comprehensive overview.',
            ],
            exercises: [
              {
                instruction:
                  'Перепишите в официальном стиле: "Read all of the instructions before proceeding."',
                expectedAnswer:
                  'All instructions should be read before proceeding.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 1,
      title: 'Базовый технический английский',
      description:
        ' Основы грамматики, терминологии и навыков чтения технических текстов для начинающих',
      level: 'Starter',
    },
    {
      id: 2,
      title: 'Английский для инженеров',
      description: 'Специфическая лексика и оформление инженерной документации',
      level: 'Starter',
    },
    {
      id: 3,
      title: 'Английский для IT-специалистов',
      description:
        'Изучение терминологии программирования, навыки общения в международных IT-командах',
      level: 'Starter',
    },
    {
      id: 4,
      title: 'Деловой английский для технических специалистов',
      description:
        'Навыки деловой переписки, составление резюме, проведение переговоров',
      level: 'Starter',
    },
  ],
};
export const myCourses = createSlice({
  name: 'myCourses',
  initialState,
  reducers: {
    addNew: (state, action) => {
      state.items.push(action.payload);
    },
  },
});
export const { addNew } = myCourses.actions;
export default myCourses.reducer;
