import arcRadiusLogoPng from '../../assets/arc-radius-logo.png';

export const ArcRadiusLogo = ({
  size = 36,
  className = '',
}: {
  size?: number;
  className?: string;
}) => (
  <img
    src={arcRadiusLogoPng}
    alt="Arc Radius"
    width={size}
    height={size}
    className={`rounded-full ${className}`}
    style={{ objectFit: 'cover' }}
  />
);

export const ArcRadiusLogoSmall = ({
  size = 32,
}: {
  size?: number;
  dark?: boolean;
}) => (
  <img
    src={arcRadiusLogoPng}
    alt="Arc Radius"
    width={size}
    height={size}
    className="rounded-full"
    style={{ objectFit: 'cover' }}
  />
);
