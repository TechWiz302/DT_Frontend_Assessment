# Prerequisites
###
- Unzip the zip file
- If Docker Hub is not installed on your system install it from (https://hub.docker.com/).

## Building
Open the terminal/ powershell at the code repository folder.

To build the Docker image, run:

```shell
docker build -t index . 
```

To run the image locally:

```shell
docker run -p 8080:8080 index
```

and navigate to `http://localhost:8080`.

### Deployed Web Application Link:
(https://dt-frontend-assessment.vercel.app/)
