import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/changeColor';
import {
  Section,
  SectionTitle,
  StatList,
  StatListItem,
  ItemLabel,
  ItemPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem
              key={id}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <ItemLabel>{label}</ItemLabel>
              <ItemPercentage>{percentage}%</ItemPercentage>
            </StatListItem>
          );
        })}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
