import React from 'react';
import { HStack, Button } from '@chakra-ui/react';
import { paginationButtonStyles } from '../styles/PaginationStyles';

const Pagination = ({ todosPerPage, totalTodos, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <HStack>
      {pageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => paginate(number)}
          isActive={number === currentPage}
          {...paginationButtonStyles}
        >
          {number}
        </Button>
      ))}
    </HStack>
  );
};

export default Pagination;
