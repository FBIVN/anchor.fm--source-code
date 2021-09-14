import React from 'react';

type FillColor = string;
type ClassName = string;

interface Props {
  fillColor: FillColor;
  className: ClassName;
}

const defaultProps = {
  className: '',
  fillColor: '#53585E',
};

const EpisodeIcon = ({
  fillColor = '#53585E',
  className = '',
}: Props): React.ReactElement<React.ReactNode> => (
  <svg
    viewBox="0 0 58 26"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g fill="none" fillRule="evenodd">
      <g fill={fillColor} fillRule="nonzero">
        <g>
          <path d="M3,-7.10542736e-15 L55,-7.10542736e-15 C56.6568542,-7.40978655e-15 58,1.34314575 58,3 L58,23 C58,24.6568542 56.6568542,26 55,26 L3,26 C1.34314575,26 -2.15574652e-14,24.6568542 -2.17603713e-14,23 L-2.17603713e-14,3 C-2.19632774e-14,1.34314575 1.34314575,-6.80106817e-15 3,-7.10542736e-15 Z M6.71741999,4.66583399 C5.60024347,4.66583399 4.69459295,5.57148451 4.69459295,6.68866104 L4.69459295,17.9736044 C4.69459295,19.0907809 5.60024347,19.9964314 6.71741999,19.9964314 L18.096857,19.9964314 C19.2140336,19.9964314 20.1196841,19.0907809 20.1196841,17.9736044 L20.1196841,6.68866104 C20.1196841,5.57148451 19.2140336,4.66583399 18.096857,4.66583399 L6.71741999,4.66583399 Z M23.7624843,6.66547714 C22.8618008,6.66547714 22.1316525,7.39562543 22.1316525,8.29630899 L22.1316525,8.36738385 C22.1316525,9.26806741 22.8618008,9.9982157 23.7624843,9.9982157 L50.0096906,9.9982157 C50.9103742,9.9982157 51.6405225,9.26806741 51.6405225,8.36738385 L51.6405225,8.29630899 C51.6405225,7.39562543 50.9103742,6.66547714 50.0096906,6.66547714 L23.7624843,6.66547714 Z M23.7624843,12.6644066 C22.8618008,12.6644066 22.1316525,13.3945548 22.1316525,14.2952384 L22.1316525,14.3663133 C22.1316525,15.2669968 22.8618008,15.9971451 23.7624843,15.9971451 L38.6085363,15.9971451 C39.5092199,15.9971451 40.2393682,15.2669968 40.2393682,14.3663133 L40.2393682,14.2952384 C40.2393682,13.3945548 39.5092199,12.6644066 38.6085363,12.6644066 L23.7624843,12.6644066 Z" />
        </g>
      </g>
    </g>
  </svg>
);

EpisodeIcon.defaultProps = defaultProps;

export default EpisodeIcon;
