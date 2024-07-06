export const mainContainerStyles = {
  position: 'relative',
  width: '100%',
};

export const boxStyles = {
  position: 'absolute',
  top: '3.875rem',
  left: '0',
  right: '0',
  height: '0.0625rem',
  backgroundColor: '#DBDBDB',
  zIndex: '1',
};

export const hStackStyles = {
  justifyContent: 'space-between',
  width: '100%',
  height: '3.875rem',
  alignItems: 'center',
};

export const vStackStyles = {
  display: 'flex',
  width: '100%',
  px: '1.0625rem',
};

export const tabListStyles = {
  display: 'flex',
  overflowX: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  height: '3.125rem',
  fontSize: '1rem',
  fontWeight: '600',
  lineHeight: '1.361875rem',
  sx: {
    '::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },
};

export const tabStyles = {
  px: '1.1875rem',
  _selected: {
    color: '#639605',
  },
};

export const absoluteBoxStyles = {
  position: 'absolute',
  top: '3.9375rem',
  left: '0',
  right: '0',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  backgroundColor: '#FFFFFF',
  boxShadow: '0rem 0.1875rem 0.1875rem 0rem #0000001F',
  sx: {
    '::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },
};
