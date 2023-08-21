import NextImage, { NextImageProps } from '@/components/NextImage';

type ImageProps = Omit<
  NextImageProps,
  'className' | 'width' | 'height' | 'useSkeleton'
>;

export const ProjectCard: React.FC<{
  backgroundImageProps: ImageProps;
  forgroundImageProps: ImageProps;
  children: React.ReactNode;
}> = ({ backgroundImageProps, forgroundImageProps, children }) => {
  return (
    <>
      <div style={{ zIndex: 0, width: '28vh', height: '25vh' }}>
        <NextImage
          useSkeleton
          className='w-128 w-128'
          width='360'
          height='360'
          {...backgroundImageProps}
        />
      </div>
      {children}
    </>
  );
};
