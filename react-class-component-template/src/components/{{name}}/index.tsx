import { Box, BoxProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface {{component-name}}Props {
  box?: BoxProps
}

function {{component-name}}({ box } : {{component-name}}Props) {
  const { t } = useTranslation();
  const boxProps = { ...{{component-name}}.defaultProps.box, ...box } as BoxProps;
  return (
    <Box {...boxProps}>
      {t('hello-world')}
    </Box>
  );
}

{{component-name}}.defaultProps = {
  box: {
    sx: { background: 'blue' },
  },
};

export default {{component-name}};
