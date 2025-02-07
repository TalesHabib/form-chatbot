FROM node:20-alpine AS base

# Instale dependências somente quando necessário
FROM base AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY . .

ARG VITE_GEOAPIFY_KEY
# Passei a key porque não estava aceitando a variavel de ambiente.
ENV VITE_GEOAPIFY_KEY='e9ce9b3c87f94c97a86385d1c786010e'

RUN yarn \
  && yarn build --mode production

# Imagem de produção, copie todos os arquivos e execute a seguir
FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 react

COPY --from=builder /app/dist ./dist

RUN yarn add vite -D

COPY --from=builder /app/package.json ./

USER react

EXPOSE 4173

ENTRYPOINT ["yarn", "preview", "--host"]