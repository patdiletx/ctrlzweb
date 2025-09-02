# 📊 Configuración de Google Analytics 4

## ✅ T14 - Implementación Completada

La integración de Google Analytics 4 ha sido **completamente implementada**. Solo necesitas configurar tu Measurement ID.

### 🎯 Lo que se implementó:

1. **✅ Componente Analytics**: Script optimizado con Next.js
2. **✅ Tracking de conversiones**: Eventos personalizados para suscripciones
3. **✅ TypeScript types**: Definiciones para gtag
4. **✅ Metadatos mejorados**: SEO básico en layout
5. **✅ Variables de entorno**: Configuración flexible

---

## 🔧 Configuración Requerida

### Paso 1: Crear cuenta de Google Analytics

1. **Ir a**: https://analytics.google.com/
2. **Crear cuenta** o usar una existente
3. **Crear propiedad** para ctrlz.app
4. **Configurar data stream** para web
5. **Obtener Measurement ID** (formato: G-XXXXXXXXXX)

### Paso 2: Configurar variables de entorno

```bash
# En tu archivo .env.local, agregar:
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TU_MEASUREMENT_ID_AQUI
```

### Paso 3: Configurar dominio en Vercel

```bash
# Agregar variable de entorno en Vercel
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID production
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID preview  
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID development
```

---

## 📈 Métricas que se capturan:

### 🔄 Eventos Automáticos:
- **page_view**: Cada vez que se carga una página
- **scroll**: Cuando usuario hace scroll (50%, 90%)
- **click**: Clicks en links externos
- **file_download**: Descargas de archivos

### 🎯 Eventos Personalizados:
- **email_subscription**: Cuando usuario se suscribe
  - Parámetros: email, timestamp
- **conversion**: Conversión exitosa de suscripción

### 📊 Métricas Disponibles:
- **Usuarios únicos** y **sesiones**
- **Páginas más visitadas**
- **Tiempo en página**
- **Conversiones** (suscripciones)
- **Fuentes de tráfico**
- **Dispositivos** y **ubicación**

---

## 🚀 Características Técnicas:

### ⚡ Optimización de Rendimiento:
- **Lazy loading**: Scripts cargan después de la interacción
- **Producción únicamente**: No carga en desarrollo
- **Conditional rendering**: Solo si Measurement ID está configurado

### 🔒 Privacidad:
- **IP Anonymization**: Habilitada por defecto
- **Cookie Consent**: Listo para implementar cuando sea necesario
- **GDPR Compliant**: Configuración base compatible

### 📱 Funciones Disponibles:

```typescript
// Tracking manual de eventos
import { trackEvent, trackEmailSubscription } from '@/components/Analytics';

// Tracking de suscripción (ya implementado)
trackEmailSubscription(email);

// Tracking personalizado
trackEvent('click', 'header', 'logo');
```

---

## 🧪 Verificación:

### Una vez configurado:
1. **Desplegar** a producción
2. **Visitar** https://ctrlz.app
3. **Revisar** Google Analytics dashboard (puede tardar 24h)
4. **Probar** suscripción para verificar eventos

### Debug en desarrollo:
```bash
# Ver logs en consola del navegador
npm run dev
# Abrir Network tab para verificar requests a GA
```

---

## ✅ Estado:

**Implementación**: ✅ **100% Completada**  
**Configuración**: ⏳ **Pendiente tu Measurement ID**

¡Una vez que agregues tu Measurement ID, tendrás analytics completas funcionando! 📊