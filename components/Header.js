import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export const Header = ({ level = 1, title, subtitle, date }) => {
  const tag = `h${level}`;
  return (
    <header>
      {date && <span>{date}</span>}
      <Headline as={tag}>{title}</Headline>
      {subtitle && <span>{subtitle}</span>}
    </header>
  );
};

const Headline = styled.h1``;

Header.propTypes = {
  level: PropTypes.number,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string,
};
