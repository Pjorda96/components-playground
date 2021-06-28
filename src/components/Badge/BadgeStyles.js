import styled, { css } from "styled-components";

export const Container = styled.div`
  display: inline-flex;
`;

export const StyledBadgeWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAvatarWrapper = styled.div`
  position: relative;
`;

export const StyledAvatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const StyledBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 24px;
  border-radius: 50%;
  border: ${p => p.borderColor && `3px solid ${p.borderColor}`};
  background: ${p => p.background};
  color: white;
`;

const iconStyles = css`
  font-size: ${(p) => (p.hasBorder ? "60%" : "70%")};
`;

const textStyles = css`
  font-size: ${(p) => (p.hasBorder ? "50%" : "50%")};
`;

export const StyledContent = styled.span`
  line-height: 1;
  ${(p) => (p.isIcon ? iconStyles : textStyles)};
`;
