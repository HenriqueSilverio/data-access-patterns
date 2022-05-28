# Data Access Patterns

Enterprise Application Architecture: Data Access Patterns examples.

## Row Data Gateway

- [Theory](https://www.martinfowler.com/eaaCatalog/rowDataGateway.html)
- [Implementation](src/RowDataGateway)

See it running:

```bash
npm run start:row-data-gateway
```

## Data Mapper

- [Theory](https://martinfowler.com/eaaCatalog/dataMapper.html)
- [Implementation](src/DataMapper)

See it running:

```bash
npm run start:data-mapper
```

## Docker

### Build

```bash
docker build -t db-patterns .
```

### Run

```bash
docker run --rm -it --name db-patterns db-patterns
```

### Access

```bash
docker exec -it db-patterns /bin/sh
```
