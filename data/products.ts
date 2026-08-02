export type Product = {
id: string;
title: string;
category: string;
pages: number;
age: string;
description: string;
cover: string;
preview: string[];
};

export const products: Product[] = [
{
id: 'animal-coloring-book',
title: 'Animal Coloring Book',
category: 'coloring-books',
pages: 30,
age: '3-6 years',
description:
'Cute animal coloring pages for preschool and kindergarten children.',
cover: '',
preview: [],
},
{
id: 'brain-puzzle-pack',
title: 'Brain Puzzle Pack',
category: 'brain-games',
pages: 25,
age: '5-8 years',
description:
'Printable maze, matching, and logic activities to build thinking skills.',
cover: '',
preview: [],
},
{
id: 'math-worksheet-pack',
title: 'Math Worksheet Pack',
category: 'math-worksheets',
pages: 40,
age: '6-8 years',
description:
'Printable addition, subtraction, and number recognition worksheets.',
cover: '',
preview: [],
},
];
