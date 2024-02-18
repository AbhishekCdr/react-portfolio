import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function HorizontalCard({
  imageUrl,
  title,
  description,
  git,
  live,
  description1,
  description2,
}) {
  return (
    <Card className="w-full max-w-[70rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img src={imageUrl} alt="card-image" className="h-auto w-full" />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 font-customFont"
        >
          {title}
        </Typography>
        <Typography color="gray" className="font-normal">
          {description}
        </Typography>
        <Typography color="gray" className="font-normal">
          {description1}
        </Typography>
        <Typography color="gray" className="mb-3 font-normal">
          {description2}
        </Typography>
        <a
          href={git}
          className="inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="text"
            className="flex items-center gap-2"
            color="pink"
          >
            Github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
        <a
          href={live}
          className="inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="text"
            className="flex items-center gap-2"
            color="blue"
          >
            Live
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
