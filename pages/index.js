import {
  Card,
  BasicGrid,
  Container,
  PhotoGrid,
  AnimatedGrid,
  AnimatedCard,
} from '../styles/index';
import {imagesArr} from '../utils/imageUrls';

export default function Home () {
  const displayImages = imagesArr.map (item => {
    return <Card key={item.id} url={item.img}>{item.id}</Card>;
  });

  return (
    <Container>
      <BasicGrid style={{paddingBottom: '2rem'}}>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
        <Card>4</Card>
        <Card>5</Card>
        <Card>6</Card>
      </BasicGrid>
      <PhotoGrid style={{paddingBottom: '2rem'}}>
        {displayImages}
      </PhotoGrid>
      <AnimatedGrid>
        <AnimatedCard>1</AnimatedCard>
        <AnimatedCard>2</AnimatedCard>
        <AnimatedCard>3</AnimatedCard>
        <AnimatedCard>4</AnimatedCard>
        <AnimatedCard>5</AnimatedCard>
        <AnimatedCard>6</AnimatedCard>
        <AnimatedCard>7</AnimatedCard>
        <AnimatedCard>8</AnimatedCard>
        <AnimatedCard>9</AnimatedCard>
        <AnimatedCard>10</AnimatedCard>
        <AnimatedCard>11</AnimatedCard>
        <AnimatedCard>12</AnimatedCard>
        <AnimatedCard>13</AnimatedCard>
      </AnimatedGrid>
    </Container>
  );
}
