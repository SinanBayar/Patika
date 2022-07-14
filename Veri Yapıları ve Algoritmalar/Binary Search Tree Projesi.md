## Binary Search Tree Projesi

**[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.**
Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

![Açıklama](https://i.imgur.com/KngD5vi.jpg)

```- 7 | Root 7'dir.```

```- 5 | 5<7, 5 7'nin soluna yazılır.```

```- 1 | 1<7, 1<5, 1 5'in soluna yazılır.```

```- 8 | 8>7, 8 7'nin sağına yazılır.```

```- 3 | 3<7, 3<5, 3>1, 3 1'in sağına yazılır.```

```- 6 | 6<7, 6>5, 6 5'in sağına yazılır.```

```- 0 | 0<7, 0<5, 0<1, 0 1'in soluna yazılır.```

```- 9 | 9>7, 9>8, 9 8'in sağına yazılır.```

```- 4 | 4<7, 4<5, 4>1, 4>3, 4 3'ün sağına yazılır.```

```- 2 | 2<7, 2<5, 2>1, 2<3, 2 3'ün soluna yazılır.```