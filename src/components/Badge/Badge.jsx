import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'

import {
  Container,
  StyledBadgeWrapper,
  StyledAvatarWrapper,
  StyledAvatar,
  StyledBadge,
  StyledContent,
} from './BadgeStyles';
import avatar from "../../assets/images/profile.jpg";

export default function Badge() {
  return (
    <Container>
      {/*number badge*/}
      <StyledBadgeWrapper>
        <StyledAvatarWrapper>
          <StyledAvatar src={avatar} />
          <StyledBadge
            background="#ff07eb"
            borderColor="#262526"
          >
            <StyledContent
              hasBorder
            >
              4
            </StyledContent>
          </StyledBadge>
        </StyledAvatarWrapper>
      </StyledBadgeWrapper>

      {/*status badge*/}
      <StyledBadgeWrapper>
        <StyledAvatarWrapper>
          <StyledAvatar src={avatar} />
          <StyledBadge
            background="red"
          >
            <StyledContent />
          </StyledBadge>
        </StyledAvatarWrapper>
      </StyledBadgeWrapper>

      {/*status badge*/}
      <StyledBadgeWrapper>
        <StyledAvatarWrapper>
          <StyledAvatar src={avatar} />
          <StyledBadge
            background="orange"
          >
            <StyledContent isIcon hasBorder >
              <FontAwesomeIcon icon={faBitcoin} />
            </StyledContent>
          </StyledBadge>
        </StyledAvatarWrapper>
      </StyledBadgeWrapper>
    </Container>
  );
}
