import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button';

import { typography } from '@/themes/BrandNude/typography';
import { palette } from '@/themes/BrandNude/palette';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-family: ${typography.fontFamily};
    margin: 2rem;
    font-size: 4rem;
    font-weight: 400;
`;

export const Button = styled(MuiButton)`
    margin: 2rem;
    background-color: ${palette.primary.main} !important;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 0.6rem 1.6rem !important;
    font-size: 1.2rem !important;

    &:hover {
        background-color: ${palette.primary.dark};
    }

    & .MuiButton-label {
        color: ${palette.primary.contrastText};
    }
`;
