# Service Manager

Prosty panel do zarządzania usługami systemowymi.

## Instalacja i uruchomienie

1. Sklonuj repozytorium: `git clone <repozytorium>`
2. Przejdź do folderu backend: `cd panel_sm/backend`
3. Utwórz wirtualne środowisko (zalecane): `python3 -m venv .venv`
4. Aktywuj wirtualne środowisko: `source .venv/bin/activate` (Linux/macOS) lub `.venv\Scripts\activate` (Windows)
5. Zainstaluj zależności: `pip install -r requirements.txt`
6. Uruchom backend: `python app.py`
7. Otwórz `frontend/index.html` w przeglądarce.

## Konfiguracja Cloudflare Tunnel

Skonfiguruj Cloudflare Tunnel zgodnie z dokumentacją Cloudflare, kierując ruch do portu, na którym działa backend (domyślnie 5000).

## Bezpieczeństwo

Pamiętaj o zabezpieczeniu aplikacji, dodając autentykację i walidację danych wejściowych.