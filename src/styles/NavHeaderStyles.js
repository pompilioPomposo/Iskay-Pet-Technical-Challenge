export const mainContainerStyles = {
  position: 'relative',
  width: '100%',
};

export const boxStyles = {
  position: 'absolute',
  top: '62px',
  left: '0',
  right: '0',
  height: '1px',
  backgroundColor: '#DBDBDB',
  zIndex: '1',
};

export const hStackStyles = {
  justifyContent: 'space-between',
  width: '100%',
  height: '62px',
  alignItems: 'center',
};

export const vStackStyles = {
  display: 'flex',
  width: '100%',
  px: '17px',
};

export const tabListStyles = {
  display: 'flex',
  overflowX: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  height: '50px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '21.79px',
  sx: {
    '::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },
};

export const tabStyles = {
  px: '19px',
  _selected: {
    color: '#639605',
  },
};

export const absoluteBoxStyles = {
  position: 'absolute',
  top: '63px',
  left: '0',
  right: '0',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 3px 3px 0px #0000001F',
  sx: {
    '::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },
};
