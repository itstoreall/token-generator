.PHONY: devnet app

env:
  cd app; cat > .env

yarn:
  cd app; yarn

app:
  cd app; yarn start