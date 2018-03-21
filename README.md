# CF Reverse Proxy

This small proxy app helps you to make arbitrary HTTP backends available over CF.

## How to use

1. Clone this repo
1. Change the entry `BACKEND_URL` in `manifest.yml` to the backend you want to reverse-proxy.
1. Run `cf push`
